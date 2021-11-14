
--
-- TABLE: registration_group_person
-- 
--  

CREATE TABLE registration_group_person (
  registration_group varchar(20) NOT NULL ,
  person int(10) unsigned NOT NULL ,
  status varchar(8) NOT NULL  DEFAULT Active,
  id int unsigned NOT NULL 
);

CREATE INDEX registration_group_person_id_index  ON registration_group_person(id);
ALTER TABLE registration_group_person CHANGE id id int unsigned  NOT NULL AUTO_INCREMENT ;

-- 
ALTER TABLE registration_group_person ADD CONSTRAINT registration_group_person_pk PRIMARY KEY (id);

CREATE INDEX registration_group_person_registration_group_index  ON registration_group_person(registration_group);

CREATE INDEX registration_group_person_registration_group_index  ON registration_group_person(registration_group);

-- 
ALTER TABLE registration_group_person ADD CONSTRAINT new_fkey_constraint FOREIGN KEY (registration_group) REFERENCES registration_group(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE registration_group_person ADD CONSTRAINT new_fkey_constraint_1 FOREIGN KEY (registration_group) REFERENCES person(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX registration_group_person_registration_group_index  ON registration_group_person(registration_group);

CREATE INDEX registration_group_person_person_index  ON registration_group_person(person);

CREATE INDEX registration_group_person_id_index  ON registration_group_person(id);
