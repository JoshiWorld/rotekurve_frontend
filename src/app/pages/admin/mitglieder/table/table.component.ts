import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mitglieder-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class MitgliederTableComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initDate();
  }

  private initDate(): void {
    const yourDate = new Date('2023-12-17');

    const months = [
      'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];

    const day = yourDate.getDate();
    const month = months[yourDate.getMonth()];
    const year = yourDate.getFullYear();

    const formattedDate = `${day}. ${month} ${year}`;

    const script = this.renderer.createElement('script');

    const scriptContent = document.createTextNode(`
      document.getElementById('dateDisplay').textContent = '${formattedDate}';
    `);

    this.renderer.appendChild(script, scriptContent);

    this.renderer.appendChild(document.body, script);
  }
}
