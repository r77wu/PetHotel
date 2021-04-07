# Pet Hotel and Grooming
Pet hotel and grooming is an online booking application for a local pet store to make reservations and manage orders.

## Table of contents
* [General info](#General-info)
* [Technologies](#Technologies)
* [Setup](#Setup)



## General-info
<p align="center">
<img src='images/HomePage.PNG' width='600' height='300' />
<p>
1. Checking available hotel rooms or grooming service at selected time period.
<p align="center">
<img src='images/HotelReservation.PNG' width='600' height='200' />
<p>
<p align="center">
<img src='images/GroomingReservation.PNG' width='600' height='200' />
<p>
2. Making reservations for pet hotel or grooming service.
<p align="center">
<img src='images/ReservationSummary.PNG' width='300' height='500' />
<p>
3. Managing reservations, pets, and profile.
<p align="center">
<img src='images/AccountOrders.PNG' width='650' height='400' />
<p>
<p align="center">
<img src='images/AccountPets.PNG' width='650' height='400' />
<p>
4. Adopting dogs.


## Technologies
Project is created with:
* React version: 17.0.1
* Django version: 3.1.7
* Django Rest Framework version: 3.12.2

## Setup
#### Frontend 
```bash
npm install
npm start
```

#### Backend 
```bash
Install the project dependencies:
pip install -r requirements.txt
then:
python manage.py migrate
create admin account:
python manage.py createsuperuser
then:
python manage.py makemigrations
python manage.py migrate
to start the development server:
python manage.py runserver
```
