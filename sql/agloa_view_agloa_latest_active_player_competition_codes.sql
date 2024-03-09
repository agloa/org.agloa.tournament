
-- --------------------------------------------------------

--
-- Structure for view `agloa_latest_active_player_competition_codes`
--
DROP TABLE IF EXISTS `agloa_latest_active_player_competition_codes`;

DROP VIEW IF EXISTS `agloa_latest_active_player_competition_codes`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_latest_active_player_competition_codes`  AS SELECT 1 AS `participant_id`, 1 AS `player_id`, 1 AS `competition_codes` ;
