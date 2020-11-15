import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiraPage } from './gira.page';

describe('GiraPage', () => {
  let component: GiraPage;
  let fixture: ComponentFixture<GiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
