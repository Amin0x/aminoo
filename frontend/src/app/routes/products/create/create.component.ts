import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  @Output() fileSelected = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.add('drop-zone--over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('drop-zone--over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.target as HTMLElement;
    dropZone.classList.remove('drop-zone--over');
    const file = event.dataTransfer.files[0];
    this.fileSelected.emit(file);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.fileSelected.emit(file);
  }

}
