
--
-- TABLE: competition
-- 
--  

CREATE TABLE competition (
  id varchar(20) NOT NULL ,
  age_group varchar(20) unsigned NOT NULL ,
  title varchar(512) NOT NULL ,
  description text,
  type varchar(20) NOT NULL ,
  nRounds integer(10) unsigned NOT NULL 
);

-- 
ALTER TABLE competition ADD CONSTRAINT unique_age_group_type UNIQUE (age_group,type);

-- 
ALTER TABLE competition ADD CONSTRAINT competition_primary_key PRIMARY KEY (id);

CREATE INDEX competition_age_group_index  ON competition(age_group);

CREATE INDEX competition_type_index  ON competition(type);

-- 
ALTER TABLE competition ADD CONSTRAINT competition_age_group FOREIGN KEY (age_group) REFERENCES age_group(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE competition ADD CONSTRAINT competition_type_FK FOREIGN KEY (type) REFERENCES competition_type(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX competition_id_index  ON competition(id);

CREATE INDEX competition_type_index  ON competition(type);
