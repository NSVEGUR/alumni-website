<script>
	import Main from '$layouts/Main.svelte';
	import Cover from '$ui/Cover.svelte';
</script>

<Cover
	data={{
		title: 'Contact Us',
		src: '',
		links: [],
		type: 'default'
	}}
/>
<Main>
	<form method="POST" action="?/contact" class="py-10">
		<div class="flex flex-col gap-5 w-full max-w-3xl mx-auto">
			<div class="flex flex-col">
				<label for="name" class="text-lg font-medium pb-1">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="John Doe"
					class="rounded-md px-2 py-3 border border-muted-primary"
					required
				/>
			</div>
			<div class="flex flex-col">
				<label for="email" class="text-lg font-medium pb-1">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="johndoe@gmail.com"
					class="rounded-md px-2 py-3 border border-muted-primary"
					required
				/>
			</div>
			<div class="flex flex-col">
				<label for="phone" class="text-lg font-medium pb-1">Phone Number</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					placeholder="1234567890"
					class="rounded-md px-2 py-3 border border-muted-primary"
					required
				/>
			</div>

			<div class="flex flex-col">
				<label for="purpose" class="text-lg font-medium pb-1">Purpose</label>
				<select
					id="purpose"
					name="purpose"
					class="rounded-md px-2 py-3 border border-muted-primary"
					required
				>
					<option value="">Select a purpose</option>
					<option value="campus_visit">Campus Visit</option>
					<option value="update_database">Update Database</option>
					<option value="request_alumni_cards">Request for Alumni Cards</option>
					<option value="volunteer_with_us">Volunteer with Us</option>
					<option value="others">Others</option>
				</select>
			</div>
			<div class="flex flex-col">
				<label for="message" class="text-lg font-medium pb-1">Message</label>
				<textarea
					id="message"
					name="message"
					class="rounded-md px-2 py-3 border border-muted-primary"
					placeholder="Your message goes here"
					required
				></textarea>
			</div>
			<p class="text-center text-sm">
				You can also mail us at{' '}
				<a
					href="mailto:alumni.affairs@iiitdm.ac.in"
					target="_blank"
					rel="norefer"
					class="text-accent underline underline-offset-2"
				>
					alumni.affairs@iiitdm.ac.in
				</a>
			</p>
			<button type="submit" class="rounded-lg px-2 py-3 bg-accent text-skin-inverted font-medium"
				>Submit</button
			>
		</div>
	</form>
</Main>
