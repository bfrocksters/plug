module.exports = function (api) {
    api.cache(false);
    const presets = [
      [
        '@babel/preset-env',
        {
  
          'modules': false,
          'loose': true
        },
      ],
      '@babel/react'
    ];
  
    const plugins = [
  
    ];
  
    return {
      presets,
      plugins
    };

  };
  