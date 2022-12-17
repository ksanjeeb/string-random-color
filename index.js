const generateColor = (string, saturation = 50, brightness = 60  ) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var h = hash % 360;
    return 'hsl('+h+', '+saturation+'%, '+brightness+'%)';
  }

export default { generateColor };
