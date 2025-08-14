import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Registration } from '../../services/registration';
import { Client } from '../../Model/client';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  clientlist!: Client[];
  dataSource: MatTableDataSource<Client>;
  displayedColumns: string[] = ['username', 'password', 'phone', 'course', 'feedback'];

  constructor(private service: Registration) {
    this.dataSource = new MatTableDataSource<Client>([]);
    this.loadCustomers();
  }

  loadCustomers() {
    this.service.getClient().subscribe({
      next: (res: any) => {
        // Transform the raw JSON data into Client objects
        this.clientlist = res.client.map((item: any) => ({
          username: item.username,
          password: item.password,
          phone: item.phonenumber, // Map phonenumber to phone
          course: this.getCourses(item), // Derive courses from boolean fields
          feedback: item.feedback
        }));
        this.dataSource.data = this.clientlist; // Update dataSource with transformed data
        console.log('Transformed data:', this.clientlist); // Debug log
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
      }
    });
  }

  // Helper method to derive courses from boolean fields
  private getCourses(item: any): string[] {
    const courses = [];
    if (item.php) courses.push('PHP');
    if (item.java) courses.push('Java');
    if (item.python) courses.push('Python');
    if (item.ai) courses.push('AI');
    return courses.length > 0 ? courses : ['None']; // Default to 'None' if no courses
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    console.log('Filter applied:', value);
  }
}