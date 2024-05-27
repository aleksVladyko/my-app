import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  constructor(private dataService: DataService) {}
  get itemsFromUser() {
    return this.dataService.itemsFromUser;
  }

  get itemsOfChoice() {
    return this.dataService.itemsOfChoice;
  }
  selectedItemUser: string[] = [];
  get selectedItemsFromUser() {
    return this.selectItemUser;
  }
  trackByIdUserItem(index: number, item: { id: number; name: string }): number {
    return item.id;
  }
  selectItemUser(item: { id: number; name: string }): void {
    console.log(item.name);
    this.dataService.removeItemFromUser(item);
    this.selectedItemUser = [...this.selectedItemUser, item.name];
  }

  selectedItemFromChoice: string = '';
  get selectedItemSelected() {
    return this.selectItem;
  }

  trackById(index: number, item: { id: number; name: string }): number {
    return item.id;
  }

  selectItem(item: { id: number; name: string }): void {
    console.log(item.id);

    // Добавляем предыдущий выбранный элемент обратно в itemsOfChoice, если другой элемент уже был выбран
    if (this.selectedItemFromChoice) {
      const previousSelectedItem = {
        id: this.dataService.itemsOfChoice.length + 1,
        name: this.selectedItemFromChoice,
      };
      this.dataService.addItemOfChoice(previousSelectedItem);
    }

    // Удаляем выбранный элемент из списка itemsOfChoice
    this.dataService.removeItemFromItemsOfChoice(item);

    // Обновляем выбранный элемент
    this.selectedItemFromChoice = item.name;
  }
}
