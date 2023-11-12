import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/core/Models/Enseignant';
import { EnseignantServiceService } from 'src/app/core/Services/enseignant-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  Enseignant = new Enseignant();
  constructor(private EnseignantService: EnseignantServiceService) { }

  ngOnInit(): void {
  }
  addEnseignant() {
    this.EnseignantService.addEnseignant(this.Enseignant).subscribe(res => {
      console.log(res)
      Swal.fire({
        title: 'Succès!',
        text: 'Equipe ajoutée avec succès',
        timer: 40000, // Durée d'affichage en millisecondes (3 secondes)
        showConfirmButton: false // Pour empêcher l'utilisateur de fermer la fenêtre manuellement
      });
      setTimeout(() => {
        window.location.reload();
      });
      this.Enseignant = new Enseignant()
    }, err => {
      console.log(err)
      alert('erron server')
    })
  }

}
