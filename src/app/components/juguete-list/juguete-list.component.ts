import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Juguetes } from 'src/app/models/juguetes.interface';
import { JuguetesService } from 'src/app/services/juguetes.service';

@Component({
  selector: 'app-juguete-list',
  templateUrl: './juguete-list.component.html',
  styleUrls: ['./juguete-list.component.scss']
})
export class JugueteListComponent implements OnInit {

  juguetes!:Juguetes;
  loaded:boolean = false;

  constructor( private juguetesService: JuguetesService) { }

  ngOnInit(): void {

    this.juguetesService.getAllJuguetes().subscribe({

      next:(juguetes: Juguetes) => {
        if (juguetes)
          this.juguetes = juguetes;
          this.loaded = true;
          console.log(this.juguetes);
      }
    });
  }

}
