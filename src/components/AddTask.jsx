function AddTask() {
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o título da tarefa..."></input>
            <input type="text" placeholder="Digite a descrição da tarefa..."></input>
            <button>Adicionar</button>
        </div>
    );
}

export default AddTask;