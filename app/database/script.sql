use heroes;

drop table if exists Heroes;

create table Heroes (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    power varchar(255) NOT NULL,
    primary key (id)
);

insert into Heroes (name, power) values
    ('Bumblebee', 'Plasma canom'),
    ('Optimus Prime', 'Plasma pistol'),
    ('Megatron', 'Plasma rocket'),
    ('Starscream', 'Plasma machine gun');