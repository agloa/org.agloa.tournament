
--
-- TABLE: award
-- 
--  

CREATE TABLE award (
  name varchar(32) NOT NULL ,
  title varchar(32) NOT NULL ,
  size varchar(32) NOT NULL ,
  color varchar(32) NOT NULL ,
  type varchar(32) NOT NULL 
);

-- 
ALTER TABLE award ADD CONSTRAINT award_primary_key PRIMARY KEY (name);

-- 
ALTER TABLE award ADD CONSTRAINT unique_award_title UNIQUE (title);

CREATE INDEX award_size_index  ON award(size);

CREATE INDEX award_color_index  ON award(color);

CREATE INDEX award_type_index  ON award(type);

-- 
ALTER TABLE award ADD CONSTRAINT award_size FOREIGN KEY (size) REFERENCES award_size(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE award ADD CONSTRAINT award_color FOREIGN KEY (color) REFERENCES award_color(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 
ALTER TABLE award ADD CONSTRAINT award_type FOREIGN KEY (type) REFERENCES award_type(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- CHECK Constraints are not supported in Mysql (as of version 5.x)
-- But it'll parse the statements without error 

CREATE INDEX award_name_index  ON award(name);

CREATE INDEX award_size_index  ON award(size);

CREATE INDEX award_color_index  ON award(color);

CREATE INDEX award_type_index  ON award(type);
