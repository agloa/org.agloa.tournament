
-- --------------------------------------------------------

--
-- Structure for view `participant_roles`
--
DROP TABLE IF EXISTS `participant_roles`;

DROP VIEW IF EXISTS `participant_roles`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `participant_roles`  AS SELECT `option_group_values`.`value` AS `value`, `option_group_values`.`value_label` AS `value_label` FROM `option_group_values` WHERE (`option_group_values`.`group_title` like 'Participant Role') ;
