
-- --------------------------------------------------------

--
-- Structure for view `agloa_team_competition_type`
--
DROP TABLE IF EXISTS `agloa_team_competition_type`;

DROP VIEW IF EXISTS `agloa_team_competition_type`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_team_competition_type`  AS SELECT `team_data`.`entity_id` AS `team_id`, concat(`team_data`.`equations_21`,'EQ') AS `competition`, 'Equations' AS `competition_type` FROM `team_data` WHERE (`team_data`.`equations_21` <> '')union select `team_data`.`entity_id` AS `team_id`,concat(`team_data`.`on_sets_22`,'OS') AS `competition`,'On-Sets' AS `competition_type` from `team_data` where (`team_data`.`on_sets_22` <> '') union select `team_data`.`entity_id` AS `team_id`,concat(`team_data`.`propaganda_24`,'PROP') AS `competition`,'Propaganda' AS `competition_type` from `team_data` where (`team_data`.`propaganda_24` <> '') union select `team_data`.`entity_id` AS `team_id`,concat(`team_data`.`current_events_74`,'CE') AS `competition`,'Current Events' AS `competition_type` from `team_data` where (`team_data`.`current_events_74` <> '') union select `team_data`.`entity_id` AS `team_id`,concat(`team_data`.`linguishtik_23`,'LI') AS `competition`,'LinguiSHTIK' AS `competition_type` from `team_data` where (`team_data`.`linguishtik_23` <> '') union select `team_data`.`entity_id` AS `team_id`,concat(`team_data`.`presidents_25`,'PREZ') AS `competition`,'Presidents' AS `competition_type` from `team_data` where (`team_data`.`presidents_25` <> '') union select `team_data`.`entity_id` AS `team_id`,concat(`team_data`.`wff_n_proof_27`,'WFF') AS `competition`,'Wff \'N Proof' AS `competition_type` from `team_data` where (`team_data`.`wff_n_proof_27` <> '') union select `team_data`.`entity_id` AS `team_id`,concat(`team_data`.`world_events_26`,'WE') AS `competition`,'Theme' AS `competition_type` from `team_data` where (`team_data`.`world_events_26` <> '')  ;
