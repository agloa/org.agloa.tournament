
--
-- TABLE: geocode
-- 
--  

CREATE TABLE geocode (
  GEOCODE varchar(2) NOT NULL ,
  state varchar(2) NOT NULL ,
  name varchar(50) NOT NULL 
);

-- 
ALTER TABLE geocode ADD CONSTRAINT GEOCODE_pk PRIMARY KEY ();

-- 
ALTER TABLE geocode ADD CONSTRAINT unique_city_state UNIQUE (name,state);

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX geocode_GEOCODE_index  ON geocode(GEOCODE);

CREATE INDEX geocode_state_index  ON geocode(state);
