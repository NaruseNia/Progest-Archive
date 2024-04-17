interface Shader {
  vertexShader: string;
  fragmentShader: string;
}

export const NoiseShader: Shader = {
  vertexShader: `
  uniform float uTime;

  varying float vTime;

  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    vTime = uTime;
  }
  `,
  fragmentShader: `
  precision highp float;

  varying float vTime;

  const int   oct  = 12;
  const float per  = 0.05;
  const float PI   = 3.1415926;
  const float cCorners = 1.0 / 16.0;
  const float cSides   = 1.0 / 8.0;
  const float cCenter  = 1.0 / 4.0;

  float interpolate(float a, float b, float x){
      float f = (1.0 - cos(x * PI)) * 0.5;
      return a * (1.0 - f) + b * f;
  }

  float rnd(vec2 p){
      return fract(sin(dot(p ,vec2(12.9898,78.233))) * 43758.5453);
  }

  float irnd(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec4 v = vec4(rnd(vec2(i.x,       i.y      )),
                    rnd(vec2(i.x + 1.0, i.y      )),
                    rnd(vec2(i.x,       i.y + 1.0)),
                    rnd(vec2(i.x + 1.0, i.y + 1.0)));
      return interpolate(interpolate(v.x, v.y, f.x), interpolate(v.z, v.w, f.x), f.y);
  }

  float noise(vec2 p){
      float t = 0.0;
      for(int i = 0; i < oct; i++){
          float freq = pow(2.0, float(i));
          float amp  = pow(per, float(oct - i));
          t += irnd(vec2(p.x / freq, p.y / freq)) * amp;
      }
      return t;
  }

  float snoise(vec2 p, vec2 q, vec2 r){
      return noise(vec2(p.x,       p.y      )) *        q.x  *        q.y  +
             noise(vec2(p.x,       p.y + r.y)) *        q.x  * (1.0 - q.y) +
             noise(vec2(p.x + r.x, p.y      )) * (1.0 - q.x) *        q.y  +
             noise(vec2(p.x + r.x, p.y + r.y)) * (1.0 - q.x) * (1.0 - q.y);
  }

  float remap(float x, float in0, float in1, float out0, float out1) {
    return out0 + (out1 - out0) * (x - in0) / (in1 - in0);
  }

  vec4 posterize(in vec4 inputColor) {
    float gamma = 0.6f;
    float numColors = 32.0f;

    vec3 c = inputColor.rgb;
    c = pow(c, vec3(gamma, gamma, gamma));
    c = c * numColors;
    c = floor(c);
    c = c / numColors;
    c = pow(c, vec3(1.0/gamma));

    return vec4(c, inputColor.a);
  }

  void main() {
  vec2 t = gl_FragCoord.xy + vec2(vTime * 2.0);
    float n = noise(t);
    float inv_n = n;
    vec3 color = vec3(-n, -n, 1.0) * vec3(16.0);
    gl_FragColor = vec4(color, inv_n * 12.0);
  }
  `,
};
