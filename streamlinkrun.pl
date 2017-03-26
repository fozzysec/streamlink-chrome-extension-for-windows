#!/usr/bin/env perl
use Data::Dumper;
$_ = $ARGV[0];
s/^[a-zA-Z0-9]*:\/\///g;
system "streamlink", $_;
