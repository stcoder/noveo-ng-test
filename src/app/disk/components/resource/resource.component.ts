import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../../models/resource';
import {faFolder, faFile} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  @Input() public resource: Resource;
  public icon;

  ngOnInit() {
    this.icon = this.resource.type === 'dir' ? faFolder : faFile;
  }
}
