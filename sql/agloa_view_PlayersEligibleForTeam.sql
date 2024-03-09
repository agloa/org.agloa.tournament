
-- --------------------------------------------------------

--
-- Structure for view `PlayersEligibleForTeam`
--
DROP TABLE IF EXISTS `PlayersEligibleForTeam`;

DROP VIEW IF EXISTS `PlayersEligibleForTeam`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `PlayersEligibleForTeam`  AS SELECT 1 AS `team`, 1 AS `Player_id`, 1 AS `player_name`, 1 AS `registration_group`, 1 AS `scheduling_group`, 1 AS `competition_key` ;
