
--
-- TABLE: team
-- 
--  

CREATE TABLE team (
  id integer(10) NOT NULL ,
  name varchar(64) NOT NULL ,
  title varchar(64),
  description text,
  is_active tinyint(4),
  created_id integer(10),
  modified_id integer(10) NOT NULL 
);

-- 
ALTER TABLE team ADD CONSTRAINT team_pk PRIMARY KEY (id);

-- 
ALTER TABLE team ADD CONSTRAINT unique_team_name UNIQUE (name);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX team_id_index  ON team(id);

CREATE INDEX team_created_id_index  ON team(created_id);

CREATE INDEX team_modified_id_index  ON team(modified_id);
