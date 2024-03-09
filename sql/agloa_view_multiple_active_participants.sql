
-- --------------------------------------------------------

--
-- Structure for view `multiple_active_participants`
--
DROP TABLE IF EXISTS `multiple_active_participants`;

DROP VIEW IF EXISTS `multiple_active_participants`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `multiple_active_participants`  AS SELECT `latest_active_tournament_participants_multiplicity`.`CONTACT_ID` AS `CONTACT_ID`, `latest_active_tournament_participants_multiplicity`.`N` AS `N` FROM `latest_active_tournament_participants_multiplicity` WHERE (`latest_active_tournament_participants_multiplicity`.`N` > 1) ;
