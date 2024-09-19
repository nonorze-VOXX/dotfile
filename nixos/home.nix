{ config, pkgs, ... }:

{
	home.username = "green";
	home.homeDirectory = "/home/green";
  # 直接将当前文件夹的配置文件，链接到 Home 目录下的指定位置
  # home.file.".config/i3/wallpaper.jpg".source = ./wallpaper.jpg;

  # 递归将某个文件夹中的文件，链接到 Home 目录下的指定位置
  # home.file.".config/i3/scripts" = {
  #   source = ./scripts;
  #   recursive = true;   # 递归整个文件夹
  #   executable = true;  # 将其中所有文件添加「执行」权限
  # };

  # 直接以 text 的方式，在 nix 配置文件中硬编码文件内容
  # home.file.".xxx".text = ''
  #     xxx
  # '';
  	xresources.properties = {
		"Xcursor.size" = 30;
		"Xft.dpi" = 172;
	};
	home.packages =[
		# # You can also create simple shell scripts directly inside your
		# # configuration. For example, this adds a command 'my-hello' to your
		# # environment:
		# (pkgs.writeShellScriptBin "fk" ''
		#   echo "-shell -p !! --run !!"
		# '')
	] ++ (with pkgs;[
		# utils
		neofetch
		zip
		fzf
		which
		tree
		busybox
		btop
		tldr

		# editor
		neovim
		neovide
		vscode

		python3
	]);


	programs.git = {
		enable = true;
		userName = "nix-green";
		userEmail = "appieosugood@gmail.com";
	};
	
	programs.starship = {
		enable = true;
		settings = {
			add_newline = false;
			aws.disabled = true;
			gcloud.disabled = true;
			line_break.disabled = true;
		};
	};

	programs.zsh.enable = true;
	
	programs.bash = {
		enable = true;
		enableCompletion = true;
		bashrcExtra = ''
			export PATH="$PATH:$HOME/bin:$HOME/.local/bin:$HOME/go/bin"
		'';

		# TODO shell alias
		shellAliases = {
		      k = "kubectl";	
		};
	};

	home.stateVersion = "23.11";


	imports = [
		./shell
	];

	programs.home-manager.enable = true;
}
