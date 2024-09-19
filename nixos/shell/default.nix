{ config, pkgs, ... }:
let
	historyFile = "~/.historyfile";
	historySize = 10000; # in memory
	historySave = 50000; # in file
in
{
	programs.zsh = {
		enable = true;
		enableAutosuggestions = true;
	};

	home.shellAliases = {
		py = "python";

		grep = "grep --color=auto";
		diff = "diff --color=auto";
		ls = "ls -F --color=auto";
	};

}
