<?php
// This file declares an Angular module which can be autoloaded in CiviCRM. See also:
// http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_angularModules

return array (
  'js' => 
    array (
        0 => 'ang/app.js',
        1 => 'ang/tournament/core/services/*.service.js',
        2 => 'ang/tournament/*/*.js',
    ),
  'css' => 
    array (
        0 => 'ang/tournament.css',
    ),
  'partials' => 
    array (
        0 => 'ang/tournament',
    ),
  'settings' => 
    array (),
);
