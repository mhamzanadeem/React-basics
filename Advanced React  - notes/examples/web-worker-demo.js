// web-worker-demo.js (main thread)
// Minimal example: create a Worker from a blob and offload CPU work
export function startWorker(data, onResult){
  const code = `
    self.onmessage = function(e){
      // fake heavy computation
      const n = e.data
      let s = 0
      for(let i=0;i<n;i++){ s += i }
      self.postMessage(s)
    }
  `
  const blob = new Blob([code], {type: 'application/javascript'})
  const url = URL.createObjectURL(blob)
  const worker = new Worker(url)
  worker.onmessage = (e) => onResult(e.data)
  worker.postMessage(data)
  return () => { worker.terminate(); URL.revokeObjectURL(url) }
}
