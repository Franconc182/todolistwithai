const apiBase = '';

async function fetchTasks() {
  const res = await fetch(`${apiBase}/tasks`);
  return res.json();
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'task';
  if (task.completed) li.classList.add('done');
  li.dataset.id = task.id;

  const title = document.createElement('span');
  title.className = 'title';
  title.textContent = task.title;

  const desc = document.createElement('small');
  desc.className = 'desc';
  desc.textContent = task.description || '';

  const btns = document.createElement('div');
  btns.className = 'btns';

  const toggle = document.createElement('button');
  toggle.textContent = task.completed ? '↺' : '✓';
  toggle.title = 'Toggle completed';
  toggle.addEventListener('click', async () => {
    await fetch(`${apiBase}/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed }),
    });
    loadTasks();
  });

  const del = document.createElement('button');
  del.textContent = '🗑';
  del.title = 'Eliminar';
  del.addEventListener('click', async () => {
    if (!confirm('Eliminar tarea?')) return;
    await fetch(`${apiBase}/tasks/${task.id}`, { method: 'DELETE' });
    loadTasks();
  });

  btns.appendChild(toggle);
  btns.appendChild(del);

  li.appendChild(title);
  li.appendChild(desc);
  li.appendChild(btns);
  return li;
}

async function loadTasks() {
  const list = document.getElementById('tasks');
  list.innerHTML = '';
  try {
    const tasks = await fetchTasks();
    tasks.forEach((t) => list.appendChild(createTaskElement(t)));
  } catch (err) {
    list.innerHTML = '<li class="error">Error cargando tareas</li>';
  }
}

document.getElementById('task-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  if (!title) return alert('El título es obligatorio');
  await fetch(`${apiBase}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  loadTasks();
});

window.addEventListener('load', loadTasks);
