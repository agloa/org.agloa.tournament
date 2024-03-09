
-- --------------------------------------------------------

--
-- Structure for view `competition_counts`
--
DROP TABLE IF EXISTS `competition_counts`;

DROP VIEW IF EXISTS `competition_counts`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `competition_counts`  AS SELECT `competition_players`.`competition` AS `competition`, `competition_players`.`players` AS `players`, round((0.5 + (`competition_players`.`players` / 5)),0) AS `teams` FROM (select `competition_registrations`.`competition` AS `competition`,count(`competition_registrations`.`player_id`) AS `players` from `competition_registrations` group by `competition_registrations`.`competition`) AS `competition_players` ;
