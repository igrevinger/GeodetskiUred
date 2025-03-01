SELECT name, collation_name FROM sys.databases;
GO
ALTER DATABASE db_ab364e_geodezija SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_ab364e_geodezija COLLATE Croatian_CI_AS;
GO
ALTER DATABASE db_ab364e_geodezija SET MULTI_USER;
GO
SELECT name, collation_name FROM sys.databases;
GO



-- kreiram tablice
create table vrsta_posla(
sifra int not null primary key identity(1,1),
naziv varchar(50) not null);

create table poslovi(
sifra int not null primary key identity(1,1),
naziv varchar(60) not null,
vrsta int not null references vrsta_posla(sifra)
);

create table instrumenti(
sifra int not null primary key identity(1,1),
naziv varchar(50) not null);

create table zaposlenici(
sifra int not null primary key identity(1,1),
ime varchar(50) not null,
prezime varchar(50) not null,
oib char(11)
);

create table radovi(
sifra int not null primary key identity(1,1),
zaposlenik int not null references zaposlenici(sifra),
instrument int not null references instrumenti(sifra),
poslovi int not null references poslovi(sifra),
datum datetime,
napomena varchar(200) null
);

insert into zaposlenici (ime, prezime, oib)
values 
('Ivan', 'Grevinger', '00913631547'),
('Petar', 'Pikec', '01459211658'),
('Ante', 'Duvnjak', '69108521973'),
('Daniel', 'Milakoviæ', '73420318245'),
('Darko', 'Jeršek', '12312555373'),
('Dario', 'Radoš', '88032246026');

insert into instrumenti (naziv)
values 
('GNSS prijemnik'),
('totalna stanica'),
('Dron'),
('Nivelir'),
('Raèunalo'),
('Laserski daljinomjer');

insert into vrsta_posla (naziv)
values 
('uredski'),
('terenski');

insert into poslovi (naziv, vrsta)
values 
('Snimanje objekata', 2),
('Iskolèenje objekata', 2),
('Iskolèenje meðe', 2),
('Snimanje geodetske podloge', 2),
('Etažiranje', 2),
('Nivelmansko odreðivanje visina', 2),
('Izrada diobnog plana', 1),
('Upis objekata u katastar i zemljišnu knjigu', 1),
('Parcelacija', 1),
('Izrada elaborata infrastrukture', 1),
('Usklaðenje katastra i zemljišne knjige', 1);

insert into radovi (zaposlenik, instrument, poslovi, datum, napomena)
values 
(1, 1, 4, '2024-11-03 08:00', null),
(2, 6, 5, '2024-10-27 09:30', null),
(3, 3, 4, '2024-11-07 11:45', null),
(4, 4, 8, '2024-11-07 07:10', null),
(5, 2, 2, '2024-11-14 10:30', null),
(6, 2, 2, '2024-11-14 10:30', null),
(2, 4, 7, '2024-10-28 07:15', null),
(1, 4, 10, '2024-11-05 07:25', null),
(1, 4, 6, '2024-11-09 08:00', null),
(3, 4, 6, '2024-11-09 08:00', null),
(4, 4, 11, '2024-11-07 12:20', null);