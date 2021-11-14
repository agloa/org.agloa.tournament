
--
-- TABLE: registration_group
-- 
--  

CREATE TABLE registration_group (
  id varchar(20) NOT NULL ,
  label varchar(64) NOT NULL ,
  description text,
  scheduling_group varchar(20) NOT NULL 
);

-- 
ALTER TABLE registration_group ADD CONSTRAINT registration_group_PK PRIMARY KEY (id);

CREATE INDEX registration_group_index  ON registration_group();

-- 
ALTER TABLE registration_group ADD CONSTRAINT registration_group_scheduling_group FOREIGN KEY () REFERENCES scheduling_group() ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX registration_group_id_index  ON registration_group(id);

CREATE INDEX registration_group_scheduling_group_index  ON registration_group(scheduling_group);
