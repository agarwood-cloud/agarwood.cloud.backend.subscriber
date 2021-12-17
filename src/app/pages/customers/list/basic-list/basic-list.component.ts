import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogService, FormLayout, TableWidthConfig } from 'ng-devui';
import { Subscription } from 'rxjs';
import { FormConfig } from 'src/app/@shared/components/admin-form';
import { Item, ListDataService } from './list-data.service';

@Component({
  selector: 'da-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss'],
})
export class BasicListComponent implements OnInit {
  public filterAreaShow = false;

  public options = ['normal', 'borderless', 'bordered'];

  public sizeOptions = ['sm', 'md', 'lg'];

  public layoutOptions = ['auto', 'fixed'];

  // TODO: 类型问题 是因为tsconfig中开了strictTemplates 为true
  public searchForm: {
    borderType: '' | 'borderless' | 'bordered';
    size: 'sm' | 'md' | 'lg';
    layout: 'auto' | 'fixed';
  } = {
    borderType: '',
    size: 'md',
    layout: 'auto',
  };

  public tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'id',
      width: '100px',
    },
    {
      field: 'openid',
      width: '100px',
    },
    {
      field: 'nickname',
      width: '100px',
    },
    {
      field: 'customer',
      width: '100px',
    },
    {
      field: 'subscribe',
      width: '100px',
    },
    {
      field: 'subscribeAt',
      width: '100px',
    },
    {
      field: 'unsubscribedAt',
      width: '100px',
    },
    {
      field: 'subscribeScene',
      width: '100px',
    },
    {
      field: 'Actions',
      width: '100px',
    },
  ];

  public basicDataSource: Item[] = [];

  public formConfig: FormConfig = {
    layout: FormLayout.Horizontal,
    items: [
      {
        label: 'Id',
        prop: 'id',
        type: 'input',
      },
      {
        label: 'Title',
        prop: 'title',
        type: 'input',
        required: true,
        rule: {
          validators: [{ required: true }],
        },
      },
      {
        label: 'Priority',
        prop: 'priority',
        type: 'select',
        options: ['Low', 'Medium', 'High'],
      },
      {
        label: 'Iteration',
        prop: 'iteration',
        type: 'input',
      },
      {
        label: 'Assignee',
        prop: 'assignee',
        type: 'input',
        required: true,
        rule: {
          validators: [{ required: true }],
        },
      },
      {
        label: 'Status',
        prop: 'status',
        type: 'select',
        options: ['Stuck', 'Done', 'Working on it', ''],
        required: true,
        rule: {
          validators: [{ required: true }],
        },
      },
      {
        label: 'Timeline',
        prop: 'timeline',
        type: 'datePicker',
      },
    ],
    labelSize: '',
  };

  public formData = {};

  public editForm = null;

  public editRowIndex = -1;

  public pager = {
    total: 0,
    page: 1,
    perPage: 10,
  };

  public busy: Subscription;

  @ViewChild('EditorTemplate', { static: true })
  EditorTemplate: TemplateRef<any>;

  public constructor(
    private listDataService: ListDataService,
    private dialogService: DialogService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.getList();
  }

  public search(): void {
    this.getList();
  }

  public getList(): void {
    this.busy = this.listDataService
      .getUserList(this.pager)
      .subscribe((res) => {
        const data = res.data.list;
        console.log('data', res);
        
        // const data = JSON.parse(JSON.stringify(res.pageList));
        this.basicDataSource = data;
        this.pager.total = res.data.count;
      });
  }

  public editRow(row: Item, index: number): void {
    this.editRowIndex = index;
    this.formData = row;
    this.editForm = this.dialogService.open({
      id: 'edit-dialog',
      width: '600px',
      maxHeight: '600px',
      title: 'Editor',
      showAnimate: false,
      contentTemplate: this.EditorTemplate,
      backdropCloseable: true,
      onClose: () => {},
      buttons: [],
    });
  }

  public deleteRow(index: number): void {
    const results = this.dialogService.open({
      id: 'delete-dialog',
      width: '346px',
      maxHeight: '600px',
      title: 'Delete',
      showAnimate: false,
      content: 'Are you sure you want to delete it?',
      backdropCloseable: true,
      onClose: () => {},
      buttons: [
        {
          cssClass: 'primary',
          text: 'Ok',
          disabled: false,
          handler: ($event: Event) => {
            this.basicDataSource.splice(index, 1);
            results.modalInstance.hide();
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }

  public onPageChange(e): void  {
    this.pager.page = e;
    this.getList();
  }

  public onSizeChange(e): void {
    this.pager.perPage = e;
    this.getList();
  }

  public reset(): void {
    this.searchForm = {
      borderType: '',
      size: 'md',
      layout: 'auto',
    };
    this.pager.page = 1;
    this.getList();
  }

  public onSubmitted(e): void  {
    this.editForm.modalInstance.hide();
    this.basicDataSource.splice(this.editRowIndex, 1, e);
  }

  public onCanceled(): void {
    this.editForm.modalInstance.hide();
    this.editRowIndex = -1;
  }
}
