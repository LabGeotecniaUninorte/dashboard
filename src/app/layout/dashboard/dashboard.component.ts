import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { 
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
    AngularFirestoreModule 
} from 'angularfire2/firestore';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    entradaCol: AngularFirestoreCollection<any>;
    entradas: Array<any>;
    /* public alerts: Array<any> = [];
    public sliders: Array<any> = []; */

    constructor(private afs: AngularFirestore) {
        
        /* this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        ); */
    }

    ngOnInit() {
        this.entradaCol = this.afs.collection('Entradas');
        this.entradaCol.valueChanges()
            .subscribe(data => {
                this.entradas = data.sort((a, b) => a.fechaDeCreacion - b.fechaDeCreacion);
            })
    }

    /* public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    } */
}
