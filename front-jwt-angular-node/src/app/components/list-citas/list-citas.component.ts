import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/interfaces/cita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css'],
})
export class ListCitasComponent implements OnInit {
  listCitas: Cita[] = [];
  loading: boolean = false;

  constructor(private _citaService: CitaService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getListCita();
  }

  getListCita() {
    this.loading = true;
    setTimeout(() => {
      this._citaService.getListCitas().subscribe((data: Cita[]) => {
        this.listCitas = data;
        this.loading = false;
      });
    }, 300);
  }

  deleteProduct(id: number) {
    this.loading = true;

    setTimeout(() => {
      this._citaService.deleteProduct(id).subscribe(() => {
        this.getListCita();
        this.toastr.warning('La Cita Fue candelada Exitosamente!','Cita Cancelada.')
      });
    }, 100);
  }
}
