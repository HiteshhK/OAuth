import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input and Output tests', () => {

    it('should correctly render the passed @Input value', () => {
      component.message = 'Enter a new title'; // 1
      fixture.detectChanges(); // 2
      const compiled = fixture.debugElement.nativeElement; // 2
      expect(compiled.querySelector('p').textContent).toBe('Enter a new title'); // 3
    });
    it('should correctly @Output value of text input in component', () => {
      spyOn(component.changeTitleEvent, 'emit'); // 1
      const button = fixture.nativeElement.querySelector('button');
      fixture.nativeElement.querySelector('input').value = 'A new title'; // 2
      const inputText = fixture.nativeElement.querySelector('input').value;

      button.click(); // 3
      fixture.detectChanges();

      expect(component.changeTitleEvent.emit).toHaveBeenCalledWith(inputText); // 4
    });
  })
});
