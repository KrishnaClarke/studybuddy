function AddReminder() {
  return (
    <div>
      <form>
        <label>Test, Assignment, or Lab?</label>
        <input
          type="text"
          id="reminderType"
          name="reminderType"
          placeholder="Type here..."
        />

        <label>Date: </label>
        <input
          type="date"
          id="reminderDate"
          name="reminderDate"
          placeholder="YYYY-MM-DD"
        />

        <button>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}
