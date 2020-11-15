import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoclientePage } from './nuevocliente.page';

describe('NuevoclientePage', () => {
  let component: NuevoclientePage;
  let fixture: ComponentFixture<NuevoclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
