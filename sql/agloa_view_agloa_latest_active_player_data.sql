
-- --------------------------------------------------------

--
-- Structure for view `agloa_latest_active_player_data`
--
DROP TABLE IF EXISTS `agloa_latest_active_player_data`;

DROP VIEW IF EXISTS `agloa_latest_active_player_data`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_latest_active_player_data`  AS SELECT `latest_active_player_data`.`participant_id` AS `participant_id`, `latest_active_player_data`.`contact_id` AS `player_id`, `latest_active_player_data`.`sort_name` AS `player_name`, `latest_active_player_data`.`equations_11` AS `EQ`, `latest_active_player_data`.`on_sets_12` AS `OS`, `latest_active_player_data`.`linguishtik_13` AS `LI`, `latest_active_player_data`.`propaganda_14` AS `PROP`, `latest_active_player_data`.`presidents_15` AS `PREZ`, `latest_active_player_data`.`world_events_16` AS `WE`, `latest_active_player_data`.`wff_n_proof_17` AS `WFF`, `latest_active_player_data`.`current_events_56` AS `CE`, concat(if((`latest_active_player_data`.`equations_11` <> ''),left(`latest_active_player_data`.`equations_11`,1),'_'),if((`latest_active_player_data`.`on_sets_12` <> ''),left(`latest_active_player_data`.`on_sets_12`,1),'_'),if((`latest_active_player_data`.`linguishtik_13` <> ''),left(`latest_active_player_data`.`linguishtik_13`,1),'_'),if((`latest_active_player_data`.`propaganda_14` <> ''),left(`latest_active_player_data`.`propaganda_14`,1),'_'),if((`latest_active_player_data`.`presidents_15` <> ''),left(`latest_active_player_data`.`presidents_15`,1),'_'),if((`latest_active_player_data`.`world_events_16` <> ''),left(`latest_active_player_data`.`world_events_16`,1),'_'),convert(if((`latest_active_player_data`.`wff_n_proof_17` <> ''),left(`latest_active_player_data`.`wff_n_proof_17`,1),'_') using utf8mb3),if((`latest_active_player_data`.`current_events_56` <> ''),left(`latest_active_player_data`.`current_events_56`,1),'_')) AS `competition_key` FROM `latest_active_player_data` ;
