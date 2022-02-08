import { CapacitorConfig } from '@capacitor/cli';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IListaFilmes } from './../models/IFilmeAPI.module';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt_BR';
  regiao = 'BR';

  private apiUrl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=a91e275eb54a93b51efa81d4eada888d';

  constructor(private http: HttpClient, public toastController: ToastController) { }


  buscarFilmes(busca: string): Observable<IListaFilmes>{
    const url = `${this.apiUrl}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
