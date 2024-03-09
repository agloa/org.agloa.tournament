
-- --------------------------------------------------------

--
-- Structure for view `competition_registrations`
--
DROP TABLE IF EXISTS `competition_registrations`;

DROP VIEW IF EXISTS `competition_registrations`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `competition_registrations`  AS SELECT `agloa_active_player_competitions_pivoted`.`contact_id` AS `player_id`, `agloa_active_player_competitions_pivoted`.`competition` AS `competition` FROM `agloa_active_player_competitions_pivoted` ;
