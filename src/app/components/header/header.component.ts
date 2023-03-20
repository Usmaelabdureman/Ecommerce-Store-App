import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  settingsMenuOpen = false;

  @Output() toggleSidenav = new EventEmitter<void>();

  toggleSettingsMenu(): void {
    this.settingsMenuOpen = !this.settingsMenuOpen;
  }

  closeSettingsMenu(): void {
    this.settingsMenuOpen = false;
  }
}
