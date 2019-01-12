import {Component, HostBinding, HostListener, Input} from '@angular/core';
import {Resource} from '../../models/resource';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css']
})
export class ResourceItemComponent {
  constructor(private router: Router) {}

  @Input() public resource: Resource;
  @HostBinding('class.list-group-item-action') get hasDir() { return this.resource.type === 'dir'; }
  @HostListener('click') onClick() {
    if (!this.hasDir) {
      return;
    }

    this.router.navigate([this.resource.path.replace('disk:', 'disk')]);
  }
}
