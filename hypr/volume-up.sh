nowVolume=$(wpctl get-volume  @DEFAULT_AUDIO_SINK@)
echo ${nowVolume:8:1}${nowVolume:10}
compare=${nowVolume:8:1}${nowVolume:10}
if ((compare  < 100 ))
then
    wpctl set-volume -l 1.5 @DEFAULT_AUDIO_SINK@ 5%+
fi
