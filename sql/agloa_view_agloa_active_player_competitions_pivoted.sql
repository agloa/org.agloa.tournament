
-- --------------------------------------------------------

--
-- Structure for view `agloa_active_player_competitions_pivoted`
--
DROP TABLE IF EXISTS `agloa_active_player_competitions_pivoted`;

DROP VIEW IF EXISTS `agloa_active_player_competitions_pivoted`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_active_player_competitions_pivoted`  AS SELECT `agloa_latest_active_player_data`.`player_id` AS `contact_id`, concat(`agloa_latest_active_player_data`.`EQ`,'EQ') AS `competition` FROM `agloa_latest_active_player_data` WHERE (`agloa_latest_active_player_data`.`EQ` <> '')union select `agloa_latest_active_player_data`.`player_id` AS `contact_id`,concat(`agloa_latest_active_player_data`.`OS`,'OS') AS `competition` from `agloa_latest_active_player_data` where (`agloa_latest_active_player_data`.`OS` <> '') union select `agloa_latest_active_player_data`.`player_id` AS `contact_id`,concat(`agloa_latest_active_player_data`.`LI`,'LI') AS `competition` from `agloa_latest_active_player_data` where (`agloa_latest_active_player_data`.`LI` <> '') union select `agloa_latest_active_player_data`.`player_id` AS `contact_id`,concat(`agloa_latest_active_player_data`.`PROP`,'PROP') AS `competition` from `agloa_latest_active_player_data` where (`agloa_latest_active_player_data`.`PROP` <> '') union select `agloa_latest_active_player_data`.`player_id` AS `contact_id`,concat(`agloa_latest_active_player_data`.`PREZ`,'PREZ') AS `competition` from `agloa_latest_active_player_data` where (`agloa_latest_active_player_data`.`PREZ` <> '') union select `agloa_latest_active_player_data`.`player_id` AS `contact_id`,concat(`agloa_latest_active_player_data`.`WE`,'WE') AS `competition` from `agloa_latest_active_player_data` where (`agloa_latest_active_player_data`.`WE` <> '') union select `agloa_latest_active_player_data`.`player_id` AS `contact_id`,concat(`agloa_latest_active_player_data`.`CE`,'CE') AS `competition` from `agloa_latest_active_player_data` where (`agloa_latest_active_player_data`.`CE` <> '') union select `agloa_latest_active_player_data`.`player_id` AS `contact_id`,concat(`agloa_latest_active_player_data`.`WFF`,'WFF') AS `competition` from `agloa_latest_active_player_data` where (`agloa_latest_active_player_data`.`WFF` <> '')  ;
