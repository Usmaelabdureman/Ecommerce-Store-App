import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBoxComponent } from './products-box.component';

describe('ProductsBoxComponent', () => {
  let component: ProductsBoxComponent;
  let fixture: ComponentFixture<ProductsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
