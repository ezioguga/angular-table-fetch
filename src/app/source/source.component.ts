import { footballReports } from './../../footballReports';
import { TableServiceService } from './../table-service.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Input } from '@angular/core';


@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  footballReports[];
  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<footballReports>(this.ELEMENT_DATA);

  constructor(private service:TableServiceService) { }

  ngOnInit() {
    this.getAllReports();
  }

  public getAllReports(){
    let resp = this.service.getSource();
    resp.subscribe(report=>this.dataSource.data=report  as footballReports[])
  }

}
