DIY Air Purifier with Water Filtration

Project Overview

This project focuses on developing an advanced DIY air purifier with water filtration capabilities. The goal was to create a cost-effective, efficient, and user-friendly air purification system that could be monitored and controlled via a web-based interface.

Timeline: December 2022 – April 2023

Key Features

Real-Time Control with Arduino IDE: Debugged and configured the Arduino IDE for precise, real-time control of the air purifier system.

Web-Based User Interface: Designed and developed an intuitive web interface using HTML, CSS, and JavaScript for monitoring and adjusting air purifier settings.

Data Logging and Analysis: Integrated data logging capabilities with Python, enabling users to track performance metrics and analyze purification efficiency.

Inventory Tracking System: Designed a user interface for inventory management, ensuring seamless API integration and efficient data handling.

Optimized Database Handling: Leveraged Django ORM for streamlined database operations and MySQL for optimized data storage and manipulation.

Test-Driven Development: Implemented JavaScript-based tests to ensure a robust and high-quality user experience.

Technologies Used

Hardware

Arduino: Microcontroller for controlling the air purifier.

Front-End

HTML5, CSS3, JavaScript: To build the web-based user interface.

Back-End

Django: Used Django's ORM for database handling.

Python: For data logging and analysis.

Database

MySQL: For managing and optimizing data storage.

Development Practices

Test-Driven Development (TDD): Ensured reliability and quality of the user interface through JavaScript-based tests.

Installation

Clone the repository:

git clone https://github.com/rpraneeth5225/DIY-Air-Purifier.git

 Navigate to the project directory:

cd diy-air-purifier

Install Python dependencies:

pip install -r requirements.txt

Set up the MySQL database:

Create a database named air_purifier.

Update settings.py with your MySQL credentials.

Run migrations:

python manage.py migrate

Start the Django development server:

python manage.py runserver

Open the Arduino IDE and upload the firmware to your Arduino microcontroller.

Access the web-based interface:

Navigate to http://localhost:5173/ in your browser.

Usage

Use the web interface to monitor air quality metrics in real-time.

Adjust purification settings through the dashboard.

View logged performance data and analyze trends.

Contributions

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

License

This project is licensed under the MIT License.

Contact

For questions or feedback, please contact [Praneeth Regonda] at [praneethregonda@gmail.com].

