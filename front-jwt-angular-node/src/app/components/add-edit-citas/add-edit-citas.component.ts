import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/interfaces/cita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-add-edit-citas',
  templateUrl: './add-edit-citas.component.html',
  styleUrls: ['./add-edit-citas.component.css'],
})
export class AddEditCitasComponent implements OnInit {
  formCita: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private _citaService: CitaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.formCita = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      procedimiento: ['', Validators.required],
      celular: ['', Validators.required],
    });

    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getCita(this.id);
    }
  }

  getCita(id: number) {
    this.loading = true;
    this._citaService.getCita(id).subscribe((data: Cita) => {
      this.loading = false;
      this.formCita.setValue({
        nombre: data.nombre,
        correo: data.correo,
        fecha: data.fecha,
        hora: data.hora,
        procedimiento: data.procedimiento,
        celular: data.celular,
      });
    });
  }

  horasDisponibles: string[] = this.generarHorasDisponibles();
  horaSeleccionada: string | undefined;

  public generarHorasDisponibles(): string[] {
    const horas: string[] = [];
    for (let hora = 9; hora <= 17; hora++) {
      if (
        hora !== 12 &&
        hora !== 13 &&
        (hora <= 11 || (hora >= 14 && hora <= 17))
      ) {
        const horaFormateada = `${hora.toString().padStart(2, '0')}:00`;
        horas.push(horaFormateada);
      }
    }
    return horas;
  }

  addCita() {
    const cita: Cita = {
      nombre: this.formCita.value.nombre,
      correo: this.formCita.value.correo,
      fecha: this.formCita.value.fecha,
      hora: this.formCita.value.hora,
      procedimiento: this.formCita.value.procedimiento,
      celular: this.formCita.value.celular,
    };

    this.loading = true;
    if (this.id !== 0) {
      cita.id = this.id;
      this._citaService.putCita(this.id, cita).subscribe(() => {
        this.toastr.info(
          `La Cita de ${cita.nombre} fue Actualizada exitosamente`,
          'Cita Actualizada!'
        );
        this.loading = false;
        this.router.navigate(['/dashboard/listCita']);
      });
    } else {
      this._citaService.saveCita(cita).subscribe(() => {
        this.toastr.success(
          `La Cita de ${cita.nombre} fue registrada exitosamente`,
          'Cita Registrada!'
        );
        this.loading = false;
        this.router.navigate(['/dashboard/listCita']);
      });
    }
  }
}
