import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juguete } from 'src/app/models/juguete.interface';
import { JuguetesService } from 'src/app/services/juguetes.service';


@Component({
  selector: 'app-juguete',
  templateUrl: './juguete.component.html',
  styleUrls: ['./juguete.component.scss']
})
export class JugueteComponent implements OnInit {

  juguete!: Juguete;
  showDetails:boolean = false;

  constructor(
      private activatedRoute:ActivatedRoute,
      private router:Router,
      private juguetesService: JuguetesService
    ) { }

  ngOnInit(): void {

    const identifier:string = <string>this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier --> ', identifier );

    this.juguetesService.getJugueteById(identifier).subscribe({

      next:(juguete:Juguete) => {
        this.juguete = juguete;
      },
      error:()=> {
        return this.router.navigateByUrl('/');
      }

    });
  }

  showAllDetails():void {

    this.showDetails = !this.showDetails;

  }


}
