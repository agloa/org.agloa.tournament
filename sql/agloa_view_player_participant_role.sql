
-- --------------------------------------------------------

--
-- Structure for view `player_participant_role`
--
DROP TABLE IF EXISTS `player_participant_role`;

DROP VIEW IF EXISTS `player_participant_role`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `player_participant_role`  AS SELECT `participant_roles`.`value` AS `value` FROM `participant_roles` WHERE (`participant_roles`.`value_label` like 'Player') ;
